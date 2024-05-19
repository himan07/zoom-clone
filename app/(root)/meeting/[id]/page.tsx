import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Navbar</h1>
      Meeting Room:#{params.id}
      <h1>Footer</h1>
    </div>
  );
};

export default Meeting;
