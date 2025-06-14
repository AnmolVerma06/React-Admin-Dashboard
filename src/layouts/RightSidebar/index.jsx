import React, { useCallback, useEffect, useRef, useState } from "react";
import { Nav, Offcanvas, Tab } from "react-bootstrap";
import SimpleBar from "simplebar-react";

// components
import ThemeCustomizer from "@/components/ThemeCustomizer/";
import { chats, tasks } from "./data";
import { useLayoutContext } from "@/context/useLayoutContext.jsx";

const RightSideBar = () => {
  const rightBarNodeRef = useRef(null);
  const [showRightSideNav, setShowRightSideNav] = useState(rightBarNodeRef);
  const {
    themeCustomizer
  } = useLayoutContext();
  /**
   * Handle the click anywhere in doc
   */
  const handleOtherClick = useCallback(e => {
    if (themeCustomizer.open) {
      if (rightBarNodeRef && rightBarNodeRef.current && rightBarNodeRef.current.contains(e.target)) {
        return;
      } else {
        themeCustomizer.toggle();
        setShowRightSideNav(false);
      }
    }
  }, [rightBarNodeRef, themeCustomizer.open]);
  useEffect(() => {
    document.addEventListener("mousedown", handleOtherClick, false);
    return () => {
      document.removeEventListener("mousedown", handleOtherClick, false);
    };
  }, [handleOtherClick]);
  return <React.Fragment>
            <Offcanvas className="right-bar" show={showRightSideNav} onHide={handleOtherClick} placement="end">
                <div className="h-100" ref={rightBarNodeRef}>
                    <SimpleBar style={{
          maxHeight: "100%",
          zIndex: 10000
        }}
        // timeout={500}
        scrollbarMaxSize={320}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="themecustomizer">
                            <Nav variant="tabs" className="nav-bordered nav-justified">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="themecustomizer" className="py-2 cursor-pointer">
                                        <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="p-0">
                                <Tab.Pane eventKey="themecustomizer">
                                    <ThemeCustomizer />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </SimpleBar>
                </div>
            </Offcanvas>
            {/* <div className="rightbar-overlay"></div> */}
        </React.Fragment>;
};
export default RightSideBar;