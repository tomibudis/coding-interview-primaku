import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { registerSchema } from "~/utils/validations";

import usePostRegister from "~/hooks/mutations/use-post-register";

import Button from "~/components/button";
import Card from "~/components/card";
import TextInputField from "~/components/hook-form/text-field";

const RegisterView: React.FC = () => {
  const router = useRouter();
  const postRegister = usePostRegister();

  const formProps = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (values) => {
    return postRegister.mutateAsync(values).then(() => {
      router.push("/homepage");
    });
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="/icon-192x192.png" alt="logo" />
            Auction System
          </div>
          <Card>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up to your account
              </h1>
              <FormProvider {...formProps}>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={formProps.handleSubmit(onSubmit)}
                >
                  <TextInputField
                    label="Email"
                    name="email"
                    placeholder="Enter email..."
                    required={true}
                  />
                  <TextInputField
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter password..."
                    required={true}
                  />
                  <Button variant="primary" className="w-full">
                    Register
                  </Button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account??{" "}
                    <Link
                      href="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </FormProvider>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RegisterView;
