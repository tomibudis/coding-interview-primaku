import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { depositSchema } from "~/utils/validations";

import usePutDeposit from "~/hooks/mutations/use-put-deposit";
import useGetItems from "~/hooks/queries/use-get-items";
import { useGetProfile } from "~/hooks/queries/use-get-profile";

import TextInputField from "~/components/hook-form/text-field";
import { Modal } from "~/components/modal";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
const DepositModal: React.FC<DepositModalProps> = ({ isOpen, onClose }) => {
  const formProps = useForm({
    defaultValues: {
      amount: "",
    },
    resolver: yupResolver(depositSchema),
  });
  const putDeposit = usePutDeposit();
  const getItems = useGetItems();
  const profile = useGetProfile();

  const onSubmit = (values) => {
    return putDeposit
      .mutateAsync({ amount: Number(values.amount) })
      .then(() => {
        getItems.refetch();
        onClose();
        profile.refetch();
      });
  };
  return (
    <Modal
      title="Deposit Money"
      isLoading={putDeposit.isLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={formProps.handleSubmit(onSubmit)}
    >
      <FormProvider {...formProps}>
        <form className="w-full" onSubmit={formProps.handleSubmit(onSubmit)}>
          <TextInputField
            label="Amount $"
            name="amount"
            type="number"
            placeholder="Enter amount here..."
            isRequired
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default DepositModal;
