'use client';

import { useState } from 'react';

export default function TrpcDemo() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);


  return (
    <div className="space-y-8 p-8 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">tRPC Demo</h2>
        
        {/* Hello Query Demo */}
        <div className="space-y-2">
          <h3 className="text-xl">Hello Query</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="İsminizi girin"
            className="border p-2 rounded"
          />
          <p className="text-lg">{}</p>
        </div>

        {/* Counter Mutation Demo */}
        <div className="space-y-2">
          <h3 className="text-xl">Counter Mutation</h3>
          <p className="text-lg">Count: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Artır
          </button>
        </div>

        {/* Users Query Demo */}
        <div className="space-y-2">
          <h3 className="text-xl">Users List</h3>
          <ul className="list-disc pl-5">
            <li key={1}>Mustafa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
