import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in he state", () => {
    const component = create(<ProfileStatus status="Its status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Its status");
  });
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Its status" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="Its status" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Its status");
  });
  test("input should be diplayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Its status" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("Its status");
  });
  test("callback should be called", () => {
      const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="Its status" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactiveteEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
