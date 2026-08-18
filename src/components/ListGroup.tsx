import { useState } from "react";

interface Props {
    items: string[],
    header: string
}

function ListGroup({items, header}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && <p>no items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
