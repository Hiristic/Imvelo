import styled from "styled-components";

export const DarkTableStyle = styled.div`
  width: 100%;
  table {
    border-collapse: separate;
    font-size: 1em;
    width: 100%;
    overflow: hidden;
    border-spacing: 0 7px;
    tbody tr {
      &:hover {
        cursor: pointer;
        td {
          color: black;
        }
      }
    }
    thead tr th {
      color: #878790;
      font-size: 12px;
      font-weight: 500;
      word-break: break-word;
      text-align: left;
    }

    tr td {
      background-color: #fff;
      padding: 20px;
    }

    tr td:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    tr td:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    tbody tr td {
      color: #878790;
      word-break: break-word;
      font-size: 12px;
      text-align: left;
      border-collapse: collapse;
    }
  }
`;

export const LightTableStyle = styled.div`
  width: 100%;
  table {
    border-collapse: collapse;
    background-color: #fdfcfc;
    font-size: 1em;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);
    tr {
      &:hover {
        background: #fff;

        td {
          color: #555;
        }
      }
    }
    tbody tr:nth-child(even) {
      background-color: #ffffff;
    }
    tbody tr {
      &:hover {
        background: #f8f7f7;
        cursor: pointer;
        td {
          color: #555;
        }
      }
    }
    thead tr th {
      background-color: #ffffff;
      color: #384c54;
      font-family: NirmalaBold, sans-serif;
      font-size: 1em;
    }
    th,
    td {
      color: #384c54;
      //border: 1px solid #eee;
      word-break: break-word;
      padding: 12px 20px;
      font-size: 0.9em;
      text-align: left;
      border-collapse: collapse;
    }
    th {
      color: #76838f;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.5;
      &.last {
        border-right: none;
      }
    }
  }
`;
