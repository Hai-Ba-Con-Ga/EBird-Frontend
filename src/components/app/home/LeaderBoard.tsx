import React from 'react'
export interface Props {
    ranks : any[];
}
const LeaderBoard = (props : Props ) => {
  return (
    <table>
        <thead>
            <th>
                <td>#</td>
                <td>Bird name</td>
                <td>Owner</td>
                <td>Elo</td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
  )
}

export default LeaderBoard