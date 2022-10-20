import * as React from 'react';
import { Pivot, PivotItem} from '@fluentui/react';
import classes from './Navbar.module.css';
import {useNavigate, useLocation} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    function getPathKey(location) {
        if (location.pathname.includes("/home")) {
            return "0"
        } else if (location.pathname.includes("/courses")) {
            return "1"
        } else if (location.pathname.includes("/course-details/")) {
            return "2"
        }
    }

    function handleOnLinkClick(data) {
        if (data.key === ".0") {
            navigate("/home", {replace: true});
        } else if (data.key === ".1") {
            navigate("/courses", {replace: true});
        } else if (data.key === ".2") {
            navigate("/home", {replace: true});
        }
    }

    return (
        <Pivot className={classes.navmenu} onLinkClick={handleOnLinkClick} aria-label="Basic Pivot Example"
               selectedKey={getPathKey(location)}>
            <PivotItem
                headerText="الصفحة الرئيسية"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'My Files Title',
                }}
            >
            </PivotItem>
            <PivotItem headerText="الدورات والمناهج">
            </PivotItem>
            <PivotItem headerText="توصل معنا">
            </PivotItem>
        </Pivot>
    );
};

export default Navbar;