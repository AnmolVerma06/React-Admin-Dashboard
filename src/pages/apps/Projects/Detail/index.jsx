import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import PageTitle from "@/components/PageTitle";
import Comments from "./Comments";
import TeamMembers from "./TeamMembers";
import Files from "./Files";

const ProjectDetail = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Projects", path: "/apps/projects" },
          { label: "Project Details", path: "/apps/projects/detail", active: true },
        ]}
        title={"Project Details"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h4 className="header-title">Project Overview</h4>
                <div>
                  <Link to="/apps/projects" className="btn btn-primary btn-sm me-1">
                    Back to Projects
                  </Link>
                  <Link to="/apps/projects/create" className="btn btn-info btn-sm">
                    Edit Project
                  </Link>
                </div>
              </div>

              <div className="mt-3">
                <h5>Project Description</h5>
                <p className="text-muted">
                  This is a sample project description. You can add your project details here.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={8}>
          <Comments />
        </Col>
        <Col xl={4}>
          <TeamMembers />
          <Files />
        </Col>
      </Row>
    </>
  );
};

export default ProjectDetail; 