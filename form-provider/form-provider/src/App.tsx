import { useFieldArray, useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface iappData {
  username: string,
  password: string,
  email: string,
  language: {
    language1: string,
    language2: string
  },
  phoneNumbers: string[],
  phNumbers: {
    number: string;
  }[]
}

let renderCount = 0;

function App() {

  const form = useForm<any>({
    defaultValues: {
      username: 'Batman',
      password: '',
      language: {
        language1: '',
        language2: "react"
      },
      phoneNumbers: ["", ""],
      phNumber: [{ number: '' }]
    }
  })

  const { register, control, handleSubmit, formState } = form

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control
  })

  const { errors, submitCount } = formState


  const submitData = (data: iappData) => {
    console.log("data are:", data)
  }

  renderCount++
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-[100vh] bg-black'>
        <form className='flex flex-col text-white py-20 space-y-3 justify-center items-center'
          onSubmit={handleSubmit(submitData)}
          noValidate
        >
          <h1 className="text-white text-bold text-2xl">Form Data: ({renderCount / 2})</h1>
          <div className='flex flex-col'>
            <label htmlFor="username">UserName:</label>
            <input type="text" id="username" {...register("username",
              {
                required: {
                  value: true,
                  message: "fill the username"
                }
              }
            )}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
            <p className="text-red-600 text-[.8rem] font-semibold">{errors.username?.message}</p>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email", {
              pattern: {
                value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
                message: 'invalide email'
              },
              required: {
                value: true,
                message: "email field is required"
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (fieldValue !== "admin@gmail.com" || 'enter another email')
                },
                notBlackListed: (fieldValue) => {
                  return (!fieldValue.endsWith("baddomain.com") || "doesn't support this type of email")
                }
              }
            })}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
            <p className="text-red-600 text-[.8rem] font-semibold">{errors.email?.message}</p>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register("password", {
              required: {
                value: true,
                message: "fill the password"
              }
            })}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
            <p className="text-red-600 text-[.8rem] font-semibold">{errors.password?.message}</p>
          </div>

          {/* <div className='flex flex-col'>
            <label htmlFor="language">Language 1:</label>
            <input type="text" id="language" {...register("language.language1")}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="language2">Language 2:</label>
            <input type="text" id="language2" {...register("language.language2")}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
          </div> */}

          <div className='flex flex-col'>
            <label htmlFor="primary-number">first phone number:</label>
            <input type="text" id="primary-number" {...register("phoneNumber.0")}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="secondary-number">second phone number:</label>
            <input type="text" id="secondary-number" {...register("phoneNumber.1")}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
          </div>

          <div className="flex-col">
            <label htmlFor="secondary-number" className="flex items-start"
            >List of phone number:</label>
            <div>
              {
                fields.map((field, index) => {
                  return (
                    <div className="flex my-2 focus:outline-none pl-3 bg-gray-700 rounded-lg" key={field.id}>
                      <input type="text" id="numbers" {...register(`phNumbers.${index}.number` as const)}
                        className={`${index > 0 ? 'w-[220px]' : 'w-[300px]'} focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg`}
                      />
                      {
                        index > 0 &&
                        <button className='px-4 py-[5px] bg-green-600'
                          onClick={() => remove(index)}
                        >Remove</button>
                      }


                    </div>
                  )
                })
              }
              < button className='px-10 py-2 bg-green-600 rounded-lg'
                onClick={() => append({ number: "" })}
              >Add Number</button>
            </div>
          </div>

          <div className="flex space-x-5">
            <button className='px-10 py-2 transition transform duration-300 ease-in-out rounded-r-full text-white font-semibold  rounded-bl-full bg-green-600 hover:rounded-full'>Submit</button>
            <h1 className="text-xl">{submitCount}</h1>
          </div>
        </form>
        <DevTool control={control} />
      </div >
    </>
  )
}

export default App
