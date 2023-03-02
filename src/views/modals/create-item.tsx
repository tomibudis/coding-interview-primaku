import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { itemSchema } from "~/utils/validations";

import usePostCreateItem from "~/hooks/mutations/use-post-create-item";

import TextInputField from "~/components/hook-form/text-field";
import { Modal } from "~/components/modal";

interface CreateItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface FormValues {
  name: string;
  startPrice: number;
  timeWindow: number;
}
const DEFAULT_VALUES = {
  name: "",
  startPrice: null,
  timeWindow: null,
};
const CreateItemModal: React.FC<CreateItemModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const formProps = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(itemSchema),
  });

  const postCreateItem = usePostCreateItem();

  const onSubmit = (values: FormValues) => {
    const date = new Date();
    date.setHours(date.getHours() + values.timeWindow);

    return postCreateItem
      .mutateAsync({
        name: values.name,
        startedPrice: values.startPrice,
        timeWindow: date.toISOString(),
      })
      .then(() => {
        onSuccess?.();
        onClose();
      });
  };

  useEffect(() => {
    if (!isOpen) {
      formProps.reset(DEFAULT_VALUES);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Modal
      title="Create Item"
      isLoading={postCreateItem.isLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={formProps.handleSubmit(onSubmit)}
    >
      <FormProvider {...formProps}>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={formProps.handleSubmit(onSubmit)}
        >
          <TextInputField
            label="Name"
            name="name"
            type="text"
            placeholder="Enter name here..."
            required
          />
          <TextInputField
            label="Start Price $"
            name="startPrice"
            type="number"
            placeholder="Enter start price here..."
            required
          />
          <TextInputField
            label="Time Window"
            name="timeWindow"
            type="number"
            placeholder="Enter time window here..."
            required
          />
          <p>
            time window calculated in hour from now. <br />
            e.g `1` duration 1 hour from now
          </p>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default CreateItemModal;
