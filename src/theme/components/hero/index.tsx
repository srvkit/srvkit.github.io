import "@rspress/core/dist/theme/components/HomeHero/index.css";
import "./index.css";

import type { Hero } from "@rspress/core";
import type * as React from "react";

import { useFrontmatter } from "@rspress/core/dist/runtime/index.js";
import { Button, renderHtmlOrText } from "@rspress/core/theme-original";

import { HeroCodeSnippet } from "../hero-code-snippet";

const HomeHero = (): React.JSX.Element => {
    const { frontmatter } = useFrontmatter();

    const hero: Hero = frontmatter.hero ?? {};

    const multiHeroText: string[] =
        hero.text !== void 0
            ? hero.text.split(/\n/g).filter((t) => t !== "")
            : [];

    return (
        <div className={"hero-two-col"}>
            <div className={"hero-two-col__text"}>
                <div className={"rp-home-hero__content"}>
                    <div className={"rp-home-hero__title"}>
                        <span
                            className={"rp-home-hero__title-brand"}
                            {...renderHtmlOrText(hero.name)}
                        />
                    </div>
                    {multiHeroText.length > 0 &&
                        multiHeroText.map((t) => (
                            <div
                                key={t}
                                className={"rp-home-hero__subtitle"}
                                {...renderHtmlOrText(t)}
                            />
                        ))}
                </div>
                <p
                    className={"rp-home-hero__tagline"}
                    {...renderHtmlOrText(hero.tagline)}
                />
                <div className={"rp-home-hero__actions"}>
                    {hero.actions?.map((action) => (
                        <Button
                            key={action.link}
                            type={"a"}
                            href={action.link}
                            theme={action.theme}
                            className={"rp-home-hero__action"}
                            {...renderHtmlOrText(action.text)}
                        />
                    ))}
                </div>
            </div>
            <div className={"hero-two-col__code"}>
                <HeroCodeSnippet />
            </div>
        </div>
    );
};

export { HomeHero };
