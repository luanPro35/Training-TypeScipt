type EventName = "click" | "scroll" | "hover";
// type BeforeEvent = `before${Capitalize<EventName>}`;
// type AfterEvent = `after${Capitalize<EventName>}`;
// type LifecycleEvent = BeforeEvent | AfterEvent;

type UIComponent = {
  [K in EventName as `on${Capitalize<K>}`]?: () => void;
};

// function triggerEvent(component: UIComponent, event: LifecycleEvent) {
//   if (component[event]) {
//     console.log(`🔗 Triggering event: ${event}`);
//     component[event]!();
//   } else {
//     console.log(`⚠️ Event ${event} chưa được gán`);
//   }
// }

// let box: UIComponent = {
//   beforeClick: () => console.log("Before click"),
//   afterClick: () => console.log("After click"),
// };

// triggerEvent(box, "beforeClick");
// triggerEvent(box, "afterClick");

function MyComponent(props: UIComponent) {
  if (props.onClick) props.onClick();
  if (props.onScroll) props.onScroll();
  if (props.onHover) props.onHover();
}

MyComponent({
  onClick: () => console.log("Click"),
  onHover: () => console.log("Hover"),
});
