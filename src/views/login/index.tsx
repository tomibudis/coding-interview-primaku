import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { loginSchema } from "~/utils/validations";

import usePostLogin from "~/hooks/mutations/use-post-login";

import Button from "~/components/button";
import Card from "~/components/card";
import TextInputField from "~/components/hook-form/text-field";

const LoginView: React.FC = () => {
  const postLogin = usePostLogin();
  const router = useRouter();

  const formProps = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (values) => {
    return postLogin.mutateAsync(values).then(() => {
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
                Sign in to your account
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
                    Login
                  </Button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      href="/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register
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

export default LoginView;
