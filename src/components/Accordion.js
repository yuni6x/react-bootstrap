import ebookImg from "../assets/kindle.png";
import { Accordion } from "react-bootstrap";

export default function Topics() {
  return (
    <section id="topics" className="mt-5">
      <div className="container-md">
        <div className="text-center">
          <h2>Inside the Book...</h2>
          <p className="lead text-muted">A quick glance at the topics you'll learn</p>
        </div>
        <div className="row my-5 g-5 justify-content-around align-items-center">
          <div className="col-6 col-lg-4">
            <img src={ebookImg} alt="kindle" className="img-fluid" />
          </div>

          {/* Accordion */}
          <div className="col-lg-7">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Chapter 1 - Your First Web Page</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Chapter 2 - Mastering CSS</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Chapter 3 - The Power of JavaScript</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header> Chapter 4 - Storing Data (Firebase Databases)</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Chapter 5 - User Authentication</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
