import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { bidSchema } from "~/utils/validations";

import usePostBid from "~/hooks/mutations/use-post-bid";

import TextInputField from "~/components/hook-form/text-field";
import { Modal } from "~/components/modal";

interface BidModalProps {
  isOpen: boolean;
  initialValues: {
    currentPrice: number;
    itemId?: string;
  };
  onClose: () => void;
  onSuccess: () => void;
}

interface FormValues {
  currentPrice?: number;
  bidPrice: number;
}
const BidModal: React.FC<BidModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialValues,
}) => {
  const formProps = useForm<FormValues>({
    defaultValues: {
      currentPrice: initialValues?.currentPrice,
      bidPrice: undefined,
    },
    resolver: yupResolver(bidSchema),
  });
  const postBid = usePostBid({ itemId: initialValues?.itemId });

  const onSubmit = (values: FormValues) => {
    postBid.mutateAsync({ price: values.bidPrice }).then(() => {
      onSuccess();
    });
  };

  return (
    <Modal
      title="Bid Item"
      isLoading={postBid.isLoading}
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
