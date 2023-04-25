import React from "react";
import axios from "axios";
import { useState } from "react";
import validator from "validator"

const FormCreatePet = () => {
  const [loading, setLoading] = useState(false);

  const [url, setUrl] = useState("");

  const [data, setData] = useState({
    image: "",
    name: "",
    specie: "",
    size: "",
    weight: "",
    age: "",
    gender: "",
    description: "",
  });

  const onchangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    axios
      .post("/pets", {
        image: url,
        name: data?.name,
        specie: data?.specie,
        size: data?.size,
        weight: data?.weight,
        age:data?.age,
        gender: data?.gender,
        description:data?.description
      })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files[0]);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      console.log(base64);
      setUrl(base64);

      return;
    }
  };
  
  const handlerClear = () =>{
  setData({
    image: "",
    name:"",
    specie: "",
    size: "",
    weight: "",
    age:"",
    gender: "",
    description:""
  })
  setUrl("")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      {loading ? (
        <div className="flex items-center justify-center">
          <img
            src={
              "https://media.tenor.com/X5QM_xv9XW8AAAAC/golden-retriever-dog.gif"
            }
          />{" "}
        </div>
      ) : (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Create a Pet</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    create and share a shelter pet story.
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Name</label>
                    <input
                      name="name"
                      value={data?.name}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Type a Name..."
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Specie</label>
                    <input
                      name="specie"
                      value={data?.specie}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Indicates the Specie"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Gender</label>
                    <input
                      name="gender"
                      value={data?.gender}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Indicates the Gender"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Size</label>
                    <input
                      name="size"
                      value={data?.size}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Indicates the Size"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Weight</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="weight"
                          value={data?.weight}
                          onChange={onchangeData}
                          type="number"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="add a weight"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Age</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="age"
                          value={data?.age}
                          onChange={onchangeData}
                          type="number"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="add a Age"
                        />
                        <div className="absolute left-3 top-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">tell us more about</label>
                    <input
                      type="text"
                      name="description"
                      value={data?.description}
                      onChange={onchangeData}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Upload Image</label>
                    <input
                      onChange={uploadImage}
                      type="file"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button onClick={handlerClear} className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>{" "}
                    Cancel
                  </button>
                  <button
                    onClick={uploadSingleImage}
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormCreatePet;

