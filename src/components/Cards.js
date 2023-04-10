import React from "react";
import { Card } from "react-bootstrap";

export default function Cards() {
  return (
    <section id="pricing" className="bg-light mt-5 py-5">
      <div className="container-lg">
        <div className="text-center">
          <h2>Pricing Plans</h2>
          <p className="lead text-muted">Choose a pricing plan to suit you.</p>
        </div>

        <div className="row my-5 g-0 align-items-center justify-content-center">

          <div className="col-8 col-lg-4 col-xl-3">
            <Card className="border-0">
              <Card.Body>
                <Card.Title as="h4">Starter Edition</Card.Title>
                <Card.Subtitle className="lead">eBook download only</Card.Subtitle>
                <Card.Text className="display-5 my-4 text-primary fw-bold">$30.99</Card.Text>
                <Card.Text className="mx-4 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatem.
                </Card.Text>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className="col-9 col-lg-4">
            <Card className="border-primary border-2 py-3">
              <Card.Body>
              <Card.Header className="text-primary border-0">Most Popular</Card.Header>
                <Card.Title as="h4">Starter Edition</Card.Title>
                <Card.Subtitle className="lead">eBook download only</Card.Subtitle>
                <Card.Text className="display-5 my-4 text-primary fw-bold">$30.99</Card.Text>
                <Card.Text className="mx-4 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatem.
                </Card.Text>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className="col-8 col-lg-4 col-xl-3">
            <Card className="border-0">
              <Card.Body>
                <Card.Title as="h4">Starter Edition</Card.Title>
                <Card.Subtitle className="lead">eBook download only</Card.Subtitle>
                <Card.Text className="display-5 my-4 text-primary fw-bold">$30.99</Card.Text>
                <Card.Text className="mx-4 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatem.
                </Card.Text>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
