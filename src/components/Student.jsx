import React from 'react'
import PropsTypes from 'prop-types'

export default function Student({ student, handleDelete, handleStartUpdate }) {
  return (
    <li className="list-group-item" key={student.id}>
      <span className="me-3">
        {student.name} : {student.age} tuổi
      </span>
      <div className="btn-group">
        <button className="btn btn-info" onClick={() => handleStartUpdate(student.id)}>
          Sửa
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>
          Xóa
        </button>
      </div>
    </li>
  )
}
Student.propTypes = {
  student: PropsTypes.object.isRequired,
  handleDelete: PropsTypes.func.isRequired,
  handleStartUpdate: PropsTypes.func.isRequired
}
