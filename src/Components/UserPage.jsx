import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import './UserPage.css';

function BitcoinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export default function Component() {
  return (
    <>
      <header className="header">
        <a href="#">
          <MountainIcon className="icon" />
          <span className="sr-only">Crypto Trading App</span>
        </a>
        <div className="header-text">
          <h1 className="title">Crypto Trading App</h1>
          <p className="subtitle">Revolutionize your trading experience.</p>
        </div>
      </header>
      <div className="main-content">
        <div className="sidebar">
          <div className="favorites">
            <h3 className="favorites-title">Favorites</h3>
            <div className="favorites-list">
              <a className="favorite-item" href="#">
                <BitcoinIcon className="favorite-icon" />
                <span>Bitcoin</span>
              </a>
              <a className="favorite-item" href="#">
                <BitcoinIcon className="favorite-icon" />
                <span>Ethereum</span>
              </a>
              <a className="favorite-item" href="#">
                <BitcoinIcon className="favorite-icon" />
                <span>Litecoin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="chart-container">
            <h2 className="chart-title">Apple Share Price</h2>
            <LineChart className="chart" />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">© 2024 Crypto Trading App. All rights reserved.</p>
      </footer>
    </>
  );
}
