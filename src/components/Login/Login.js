import React from "react";
import { useForm } from "react-hook-form";
import { FormWrapper, Wrapper, Form, Input, Button, Label, Header, Error, NeedHelp, Divider, CreateAccountButton, Footer } from "./Login.styles";
import { NavLink } from "react-router-dom";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Wrapper>
            <Header>
                <NavLink to="/">
                    <img src="/images/logo.svg" alt="logo" />
                </NavLink>
                <span>en-Us</span>
            </Header>
            <FormWrapper>
                <h1>Sign In</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email Address</Label>
                    <Input type="email" {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: <Error>Invalid email address</Error>
                        }
                    })} />
                    {errors.email?.type === "required" && <Error>Email is required</Error> || errors.email?.message}
                    <Label>Password</Label>
                    <Input type="password" {...register("password", { required: true })} />
                    {errors.password && <Error>Password is required</Error>}
                    <Button type="submit">Sign In</Button>
                    <NeedHelp>
                        <p>Forgot email?</p>
                        <span>|</span>
                        <p>Forgot password?</p>
                    </NeedHelp>
                </Form>
                <Divider>OR</Divider>
                <CreateAccountButton>Create Account</CreateAccountButton>
            </FormWrapper>
            <footer>
                <Footer>
                    <li>Tesla © 2022</li>
                    <li>Privacy & Legal</li>
                    <li>Contact</li>
                </Footer>
            </footer>
        </Wrapper>
    )
}

