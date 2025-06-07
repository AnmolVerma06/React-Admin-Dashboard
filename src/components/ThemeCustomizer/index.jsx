import React from "react";
import {useState, useEffect, useCallback} from "react";

// custom hook
import {useViewport} from "@/hooks/useViewPort";

// components
import LayoutColor from "./LayoutColor";
import LeftSideBarTheme from "./LeftSideBarTheme";
import TopBarTheme from "./TopBarTheme.jsx";
import {useLayoutContext} from "@/context/useLayoutContext.jsx";

const ThemeCustomizer = () => {
    const {
        width
    } = useViewport();
    const {
        theme,
        menu,
        topBar,
        changeTheme,
        changeMenuTheme,
        changeTopBarTheme,
        resetSettings
    } = useLayoutContext();

    /**
     * Change the layout color
     */
    const changeLayoutTheme = value => {
        switch (value) {
            case "dark":
                changeTheme('dark');
                break;
            default:
                changeTheme('light');
                break;
        }
    };

    /**
     * Changes the theme
     */
    const changeLeftSidebarTheme = value => {
        switch (value) {
            case "dark":
                changeMenuTheme('dark');
                break;
            case "brand":
                changeMenuTheme('brand');
                break;
            case "gradient":
                changeMenuTheme('gradient');
                break;
            default:
                changeMenuTheme('light');
                break;
        }
    };

    /*
     * Change topbar theme
     */
    const changeTopBarColor = value => {
        switch (value) {
            case "light":
                changeTopBarTheme('light');
                break;
            case "brand":
                changeTopBarTheme('brand');
                break;
            default:
                changeTopBarTheme('dark');
                break;
        }
    };

    return <React.Fragment>
        <h6 className="fw-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
            <span className="d-block py-1">Theme Settings</span>
        </h6>
        <div className="p-3">
            <div className="alert alert-warning" role="alert">
                <strong>Customize </strong> the overall color scheme, sidebar menu,
                etc.
            </div>

            <LayoutColor changeLayoutTheme={changeLayoutTheme} theme={theme}/>

            {/* Left Sidebar */}
            <LeftSideBarTheme changeLeftSidebarTheme={changeLeftSidebarTheme} theme={menu.theme}/>

            {/* Topbar */}
            <TopBarTheme changeTopBarTheme={changeTopBarColor} theme={topBar.theme}/>

            <div className="d-grid mt-4">
                <button className="btn btn-primary" id="resetBtn" onClick={resetSettings}>
                    Reset to Default
                </button>
            </div>
        </div>
    </React.Fragment>;
};
export default ThemeCustomizer;