'use client'

import {useEffect, useState} from "react";
import "./Blocks.scss"

export default function Blocks() {
  const sequenceOrder = [
    [[2, 2]], // 13
    [[1, 2], [2, 1], [2, 3], [3, 2]], // 8, 12, 14, 18
    [[2, 4], [3, 1]], // 15, 17
    [[1, 0], [1, 4], [3, 0]], // 6, 10, 16
    [[4, 0], [4, 3]], // 21
  ];

  const [visibleBlocks, setVisibleBlocks] = useState<boolean[][]>(
    [...Array(5)].map(() => Array(5).fill(false))
  );

  useEffect(() => {
    let orderIndex = 0;

    const execute = () => {
      if (orderIndex < sequenceOrder.length) {
        const currentBatch = sequenceOrder[orderIndex];

        setVisibleBlocks((prevVisibleBlocks) => {
          let updatedBlocks: boolean[][] = prevVisibleBlocks.map((rowArr) => [...rowArr]);
          currentBatch.forEach(([row, col]) => {
            updatedBlocks[row][col] = true;
          });
          return updatedBlocks;
        });

        orderIndex++;
      } else {
        clearInterval(intervalId);
      }
    }
    execute()
    const intervalId = setInterval(execute, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Blocks">
      {visibleBlocks.map((row, i) =>
        row.map((isVisible, j) => (
          <div
            key={`${i}-${j}`}
            className={`Block ${isVisible ? 'BlockShow Visible' : ''}`}
          />
        ))
      )}
    </div>
  );
}