import "./index.css";

import type * as React from "react";

const HeroCodeSnippet = (): React.JSX.Element => {
    return (
        <div className="hero-code-snippet">
            <div className="hero-code-header">
                <span
                    className="hero-code-dot"
                    style={{
                        backgroundColor: "#ff5f57",
                    }}
                />
                <span
                    className="hero-code-dot"
                    style={{
                        backgroundColor: "#febc2e",
                    }}
                />
                <span
                    className="hero-code-dot"
                    style={{
                        backgroundColor: "#28c840",
                    }}
                />
                <span className="hero-code-filename">{"src/index.ts"}</span>
            </div>
            <pre className="hero-code-body">
                <code>
                    <span className="hl-keyword">{"import"}</span>{" "}
                    {"{ defineServer }"}{" "}
                    <span className="hl-keyword">{"from"}</span>{" "}
                    <span className="hl-string">{'"@srvkit/vite";'}</span>
                    {"\n\n"}
                    <span className="hl-keyword">{"export default"}</span>{" "}
                    <span className="hl-fn">{"defineServer"}</span>
                    {"({\n"}
                    {"    "}
                    <span className="hl-fn">{"fetch"}</span>
                    {": ("}
                    <span className="hl-param">{"req"}</span>
                    {": "}
                    <span className="hl-type">{"Request"}</span>
                    {"): "}
                    <span className="hl-type">{"Response"}</span>
                    {" {"}
                    {"\n"}
                    {"        "}
                    <span className="hl-keyword">{"return new"}</span>{" "}
                    <span className="hl-fn">{"Response"}</span>
                    {"("}
                    <span className="hl-string">{'"Hello, World!"'}</span>
                    {");\n"}
                    {"    },\n"}
                    {"});"}
                </code>
            </pre>
        </div>
    );
};

export { HeroCodeSnippet };
