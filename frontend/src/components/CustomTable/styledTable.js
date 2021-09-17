import styled from "styled-components";

export const DarkTableStyle = styled.div`
  width: 100%;

  table {
    table-layout: fixed;
    border-collapse: separate;
    font-size: 1em;
    width: 100%;
    overflow: hidden;
    border-spacing: 0px 7px;
    tbody tr {
      &:hover {
        cursor: pointer;
      }
    }
    thead tr th {
      color: #878790;
      font-size: 12px;
      font-weight: 500;
      word-break: break-word;
      text-align: left;
      padding: 7px 0;
    }

    tr td {
      background-color: #fff;
      padding: 16px 0;
      text-align: left;
    }

    tr td:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      padding-left: 16px;
    }

    tr td:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding-right: 16px;
    }

    tbody tr td {
      color: #272727;
      //word-break: break-word;
      font-size: 0.8em;
      text-align: left;
      border-collapse: collapse;
      font-weight: 500;
      padding-right: 50px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .open-subrow {
      min-height: 340px;
      background-color: #f9f9fa;
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.01);
      white-space: normal;
      overflow: auto;
    }
  }
`;
