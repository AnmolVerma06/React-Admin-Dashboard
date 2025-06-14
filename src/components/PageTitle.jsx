import { Row, Col, Breadcrumb } from "react-bootstrap";
/**
 * PageTitle
 */
const PageTitle = props => {
  return <Row>
      <Col>
        <div className="page-title-box">
          <div className="page-title-right">
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/">AG Enterprise</Breadcrumb.Item>

              {(props["breadCrumbItems"] || []).map((item, index) => {
              return item.active ? <Breadcrumb.Item active key={index}>
                    {item.label}
                  </Breadcrumb.Item> : <Breadcrumb.Item key={index} href={item.path}>
                    {item.label}
                  </Breadcrumb.Item>;
            })}
            </Breadcrumb>
          </div>
          <h4 className="page-title">{props["title"]}</h4>
        </div>
      </Col>
    </Row>;
};

export default PageTitle;