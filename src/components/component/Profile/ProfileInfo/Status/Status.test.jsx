import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Testing Status Component", () => {
    test("Local state should have status from props", () => {
        const newStatus = "Hello World!!!";
        const component = create(<Status status={newStatus} />);
        const instance = component.getInstance();

        expect(instance.state.status).toBe(newStatus);
    });

    test("Local state should be in span", () => {
        const newStatus = "Hello World!!!";
        const component = create(<Status status={newStatus} />);
        const componentInstance = component.getInstance();
        const root = component.root;
        const span = root.findByType("span");

        expect(span.props.children).toBe(componentInstance.state.status);
    });

    test("Input shouldn't be", () => {
        const newStatus = "Hello World!!!";
        const component = create(<Status status={newStatus} />);
        const root = component.root;

        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("Local state should be in input", () => {
        const newStatus = "Hello World!!!";
        const component = create(<Status status={newStatus} />);
        const componentInstance = component.getInstance();
        const root = component.root;
        const span = root.findByType("span");
        span.props.onClick();

        const input = root.findByType("input");
        expect(input.props.value).toBe(componentInstance.state.status);
    });
});
