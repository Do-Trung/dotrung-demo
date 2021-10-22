import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      nation: 'vietnam',
      hobby: null,
      sex: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = data => console.log(data)
  const handleClass = (name, baseClass = 'form-control') => `${baseClass} ${errors[name] ? 'is-invalid' : ''}`
  const ErrorMessage = ({ name }) => {
    if (errors[name]) {
      return <div className="invalid-feedback">{errors[name].message}</div>
    }
    return null
  }
  return (
    <div className="container">
      <h1>Form Validator</h1>
      <form action="" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb3">
          <input
            type="email"
            name="email"
            id="email"
            className={handleClass('email')}
            placeholder="name@gmail.com"
            {...register('email', {
              required: {
                value: true,
                message: 'Mời bạn nhập Email'
              },
              validate: {
                email: v =>
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) ||
                  'Email không đúng định dạng'
              }
            })}
          />
          <label htmlFor="email">Email address</label>
          <ErrorMessage name="email" />
        </div>
        <div className="form-floating mb3">
          <input
            type="text"
            name="name"
            id="name"
            className={handleClass('name')}
            placeholder="Trung do"
            {...register('name', {
              required: {
                value: true,
                message: 'Mời bạn nhập họ tên'
              },
              minLength: {
                value: 2,
                message: 'Tên từ 2-160 ký tự'
              },
              maxLength: {
                value: 160,
                message: 'Tên từ 2-160 ký tự'
              }
            })}
          />
          <label htmlFor="email">Name</label>
          <ErrorMessage name="name" />
        </div>
        <div className="mb3">
          <div className="form-check">
            <input
              type="radio"
              name="nation"
              id="vietnam"
              value="vietnam"
              className={handleClass('nation', 'form-check-input')}
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="vietnam" className="form-check-label">
              Viet Nam
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="nation"
              id="aboard"
              value="aboard"
              className={handleClass('nation', 'form-check-input')}
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="aboard" className="form-check-label">
              Nuoc Ngoai
            </label>
            <ErrorMessage name="nation" />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              name="hobby"
              id="gym"
              className={handleClass('hobby', 'form-check-input')}
              value="gym"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="gym" className="form-check-label">
              Gym
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="hobby"
              id="other"
              className={handleClass('hobby', 'form-check-input')}
              value="other"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
            <ErrorMessage name="hobby" />
          </div>
        </div>
        <div className="mb-3">
          <select
            name="sex"
            className={handleClass('sex', 'form-select')}
            {...register('sex', {
              required: {
                value: true,
                message: 'Trường này là bắt buộc'
              }
            })}
          >
            <option value="">Sex</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
          <ErrorMessage name="sex" />
        </div>
        <div className="form-floating mb3">
          <input
            type="password"
            name="password"
            id="password"
            className={handleClass('password')}
            placeholder="********"
            {...register('password', {
              required: {
                value: true,
                message: 'Mời bạn nhập mật khẩu'
              },
              minLength: {
                value: 6,
                message: 'Độ dài mật khẩu từ 6-18 ký tự'
              },
              maxLength: {
                value: 18,
                message: 'Độ dài mật khẩu từ 6-18 ký tự'
              }
            })}
          />
          <label htmlFor="password">Password</label>
          <ErrorMessage name="password" />
        </div>
        <div className="form-floating mb3">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className={handleClass('confirmPassword')}
            placeholder="********"
            {...register('password', {
              required: {
                value: true,
                message: 'Mời bạn nhập mật khẩu'
              },
              minLength: {
                value: 6,
                message: 'Độ dài mật khẩu từ 6-18 ký tự'
              },
              maxLength: {
                value: 18,
                message: 'Độ dài mật khẩu từ 6-18 ký tự'
              },
              validate: {
                samePassword: v => v === getValues('password') || 'Nhập lại mật khẩu không khớp'
              }
            })}
          />
          <label htmlFor="confirmPassword">ConfirmPassword</label>
          <ErrorMessage name="confirmPassword" />
        </div>
        <button className="btn btn-primary " type="submit">
          Register
        </button>
      </form>
    </div>
  )
}
