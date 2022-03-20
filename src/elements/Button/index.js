import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


const Button = (props) => {

    // Ini untuk mempush className di react
    const className = [props.className]
    if (props.isPrimary) className.push("btn-primary")
    if (props.isLarge) className.push("btn-lg")
    if (props.isSmall) className.push("btn-sm")
    if (props.isBlock) className.push("btn-block")
    if (props.hasShadow) className.push("btn-shadow")

    // Untuk function onClick ketika di klik
    const onclick = () => {
        if (props.onclick) props.onclick();
    }

    // Untuk attribute dissabled dan loading
    if (props.isDissabled || props.isLoading) {
        if (props.isDissabled) className.push("disabled");
        return (
            <span
                className={className.join(" ")}
                style={props.style}
            >
                {props.isLoading ? (
                    <>
                        <span className="spinner-border spinner-border-sm mx-5"></span>
                        <span className="sr-only">Loading...</span>
                    </>
                ) : (props.children)}

            </span>
        );
    }

    // Untuk attribute Link
    if (props.type === "link") {
        if (props.isExternal) {
            return (
                <a
                    href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    rel={props.target === "_blank" ? "nopener noreferrer" : undefined}
                >
                    {props.children}
                </a>
            )
        } else {
            return (
                <Link
                    to={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onclick}
                >
                    {props.children}
                </Link>
            )
        }
    }

    // Ini function yang akan di panggil ke halaman utama
    return (
        <button
            className={className.join(" ")}
            style={props.style}
            onClick={onclick}
        >
            {props.children}
        </button>
    )
}

// Ini untuk attribute yang akan di taruh di setiap halaman / pages untuk button
Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onclick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isDissabled: propTypes.bool,
    isExternal: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool,
}

export default Button