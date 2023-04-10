import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function FormOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <section id="order" className="bg-light py-5">
      <div className="text-center">
        <h2>Contact Us</h2>
        <p className="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat.
        </p>
      </div>
      <pre>{JSON.stringify(userInfo, undefined, 3)}</pre>
      <div className="row justify-content-center">
        <div className="col-10 col-lg-6 text-start">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Cristiano Ronaldo"
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
              />
            </Form.Group>
            {errors.name?.type === "required" && <p role="alert">First name is required</p>}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                {...register("mail", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messages">
              <Form.Label>Message</Form.Label>
              <Form.Control name="messages" as="textarea" rows={3} {...register("messages")} />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
