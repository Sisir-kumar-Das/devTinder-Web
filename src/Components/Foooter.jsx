import React from "react";

const Foooter = () => {
  return (
    <div className="min-h-screen flex flex-col pb-20 my-20">
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Sisir
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Foooter;
