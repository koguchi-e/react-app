import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [inVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <h2>EXAMPLE</h2>
      <p>現在のカウント{count}</p>
      <button onClick={() => setCount(count + 1)}>+1 する</button>

      <hr />
      <button onClick={() => setIsVisible(!setIsVisible)}>
        表示の切り替え
      </button>
      {inVisible && <p>この文章は表示/非表示が切り替わります</p>}
    </div>
  );
}
