import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { bidSchema } from "~/utils/validations";

import usePutDeposit from "~/hooks/mutations/use-put-deposit";

import TextInputField from "~/components/hook-form/text-field";
import { Modal } from "~/components/modal";

interface BidModalProps {
  isOpen: boolean;
  initialValues: {
    currentPrice: number;
  };
  onClose: () => void;
  onSuccess: () => void;
}
const BidModal: React.FC<BidModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialValues,
}) => {
  const formProps = useForm({
    defaultValues: {
      currentPrice: initialValues?.currentPrice,
      bidPrice: undefined,
    },
    resolver: yupResolver(bidSchema),
  });
  const putDeposit = usePutDeposit();

  const onSubmit = () => {
    // TODO: post bid price

    onSuccess();
  };
  return (
    <Modal
      title="Bid Item"
      isLoading={putDeposit.isLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={formProps.handleSubmit(onSubmit)}
    >
      <FormProvider {...formProps}>
        <form className="w-full" onSubmit={formProps.handleSubmit(onSubmit)}>
          <TextInputField
            label="Bid Price $"
            name="bidPrice"
            type="number"
            placeholder="Enter bid price here..."
            isRequired
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default BidModal;
