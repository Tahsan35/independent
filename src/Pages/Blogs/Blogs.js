import { Accordion } from "react-bootstrap";

const Blogs = () => {
    return (
        <Accordion className="container mt-3" defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        <h4>What Is Authentication?</h4>
                            <p>Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process.
                            </p>
                            <br />
                            <p>Authentication confirms your identity to grant access to the system.It is the process of validating user credentials to gain user access.It determines whether user is what he claims to be.Authentication usually requires a username and a password.</p>
                        <h4>What Is Authorization?</h4>
                            <p>
                            Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.
                            </p>
                            <br />
                            <p>Authorization determines whether you are authorized to access the resources.It is the process of verifying whether access is allowed or not.It determines what user can and cannot access.Authentication factors required for authorization may vary, depending on the security level.</p>
                    </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                    <p> Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. As an Android developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc.</p>
                    <br />
                    <h5>AWS Amplify</h5>
                    <p>AWS Amplify is a cloud-based development platform designed to provide a faster way of building web and mobile applications.
                    It is one of the leading platforms that help developers create and deploy secure, scalable, and flexible applications without hassles.
                    AWS Amplify has a complete set of libraries, incredible UI components, and a toolset. It has an attractive and easy-to-navigate user interface that fosters the development of functional and sleek backend services.
                    Developers can integrate these backend services to their iOS, React, Android, Angular and ionic applications.</p>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        <h4>There are many services which Firebase provides, Most useful of them are:</h4>
                        <ul>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        </ul>
                    </Accordion.Body>
            </Accordion.Item>
</Accordion>
    );
};

export default Blogs;