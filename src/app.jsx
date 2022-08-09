import { useState, useEffect, useCallback } from "react";
import {
  TopbarMenuItem,
  useNotionNotificationBadges,
  useNotionSidebarTopButtonHtml,
} from "@nbundle/react";

function Badge({ type, element }) {
  useEffect(() => {
    // Hide badge, keep its previous attributes to restore them later
    if (!element) return;
    if (type === "sidebar/switcher-button") {
      // Keep margin right, hide only the badge
      const width = element.style.width;
      const marginRight = element.style.marginRight;
      const visibility = element.style.visibility;
      element.style.width = "0";
      element.style.marginRight = "6px";
      element.style.visibility = "hidden";
      return () => {
        element.style.width = width;
        element.style.marginRight = marginRight;
        element.style.visibility = visibility;
      };
    }
    const display = element.style.display;
    element.style.display = "none";
    return () => {
      element.style.display = display;
    };
  }, [type, element]);
  return null;
}

function Focus() {
  useEffect(() => {
    // Remove prefix '(n)' from title, keep its original value to restore it later
    const title = document.head.getElementsByTagName("title")[0];
    if (!title) return;
    let previousTitle = title.innerText;
    const updateTitle = () => {
      if (/^\([0-9]+\)\s/.test(title.innerText)) {
        previousTitle = title.innerText;
        title.innerText = title.innerText.substring(
          title.innerText.indexOf(")") + 2
        );
      }
    };
    const observer = new MutationObserver(updateTitle);
    observer.observe(title, { childList: true });
    updateTitle();
    return () => {
      observer.disconnect();
      title.innerText = previousTitle;
    };
  }, []);

  const updates = useNotionSidebarTopButtonHtml("updates");
  useEffect(() => {
    // Hide the updates button, keep its previous 'display' to restore it later
    if (!updates) return;
    const display = updates.style.display;
    updates.style.display = "none";
    return () => {
      updates.style.display = display;
    };
  }, [updates]);

  const badges = useNotionNotificationBadges();
  return (
    <>
      {badges.map((badge) => (
        <Badge key={badge.key} {...badge} />
      ))}
    </>
  );
}

export default function App() {
  const [focus, setFocus] = useState(
    () => localStorage.getItem("notion-focus-mode") !== "false"
  );
  useEffect(() => {
    if (focus) {
      localStorage.removeItem("notion-focus-mode");
    } else {
      localStorage.setItem("notion-focus-mode", "false");
    }
  }, [focus]);
  const toggleFocus = useCallback(
    () => setFocus((focus) => !focus),
    [setFocus]
  );
  return (
    <>
      <TopbarMenuItem
        type="toggle"
        text="Focus"
        checked={focus}
        onClick={toggleFocus}
      />
      {focus && <Focus />}
    </>
  );
}
