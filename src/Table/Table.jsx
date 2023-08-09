import React from 'react'
import tb from './Table.module.css'

const Table = ({ currentCountry }) => {


  return (
    <table className={tb.table}>
      <tbody>
        {
          currentCountry.map(item => (
            <tr key={item.id}>
              <td className={tb.tdUserid}>{item.id}</td>
              <td className={tb.tdTitle}>{item.title}</td>
              <td className={tb.tdBody}>{item.body}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

  )
}

export default Table