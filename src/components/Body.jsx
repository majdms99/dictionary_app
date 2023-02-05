import React, { useState } from "react";
import { BiSearchAlt2, BiPlay } from "react-icons/bi";
import Loading from "./Loading";
const Body = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aud, setAud] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errdes, setErrdes] = useState("");
  const [errRes, setErrRes] = useState("");

  const fetchResult = () => {
    setLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => res.json())
      .then((result) => {
        setErrRes("");
        setErrTitle("");
        setErrdes("");
        setAud("");
        setLinks(null);

        if (result.title && result.message) {
          setErrTitle(result.title);
          setErrdes(result.message);
          setErrRes(result.resolution);
        }

        setData(result[0]);

        // console.log(result);

        setLinks(result[0].sourceUrls);
        for (const el of result[0].phonetics) {
          if (el.audio !== "") {
            setAud(el.audio);
            // console.log("auuuu", el.audio);
            break;
          }
        }

        // console.log("result", result.title);

        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  // console.log("loading", loading);

  const runAudio = () => {
    const ad = new Audio(aud);
    ad.play();
  };
  return (
    <div>
      <div className="relative p-4">
        <input
          type="text"
          className=" w-full relative px-4 py-2 rounded-2xl bg-gray-200 outline-none dark:bg-gray-700"
          placeholder="Enter a word..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchResult();
            }
          }}
        />
        <BiSearchAlt2
          size={20}
          className="cursor-pointer absolute top-7 right-8"
          onClick={fetchResult}
        />
      </div>

      {/* Errors if is not found result.. */}

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className=" p-2">
            {errTitle && (
              <p className="mt-5 text-gray-800  dark:text-lighttext">
                <span className=" font-semibold">Title: </span>
                {errTitle}
              </p>
            )}
            {errdes && (
              <p className="mt-3 text-gray-800  dark:text-lighttext">
                <span className=" font-semibold">Message: </span>
                {errdes}
              </p>
            )}
            {errRes && (
              <p className="mt-3 text-gray-800  dark:text-lighttext">
                <span className=" font-semibold">Pesolution: </span>
                {errRes}
              </p>
            )}
          </div>

          <div className="flex justify-between flex-wrap items-center mt-5 mb-5">
            <div>
              <h1 className="mt-2 text-[40px] sm:text-[50px]">
                {data && data.word}
              </h1>
              <h6 className="mt-2 text-color_primary mb-2">
                {data && data.phonetic}
              </h6>
            </div>
            {data && aud !== "" ? (
              <div
                onClick={runAudio}
                className="mr-8 w-12 h-12 text-center bg-gray-300 flex justify-center items-center  cursor-pointer rounded-3xl"
              >
                <BiPlay size={30} className="text-color_primary" />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="">
            {data &&
              data.meanings.map((item, idx) => {
                return (
                  <div key={idx}>
                    <p className="text-3xl font-Caveat">{item.partOfSpeech}</p>
                    <hr className="m-auto -mt-3 w-10/12 dark:border-gray-700" />
                    <p className="mt-6 text-gray-500">Meaning</p>
                    <ul className="list-disc marker:text-color_primary mt-6 mb-8 ">
                      {item.definitions.map((def, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              className="mx-3 mt-3 text-gray-800  dark:text-lighttext text-sm"
                            >
                              {def.definition}
                            </li>
                            {def.example && (
                              <q className="mx-3 text-gray-600  dark:text-gray-400 text-sm">
                                {def.example}
                              </q>
                            )}
                          </>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            <hr className="dark:border-gray-700 mb-2" />
            <ul className="mt-4 ">
              {links &&
                links.map((link, ind) => {
                  return (
                    <li key={ind} className="text-gray-600 dark:text-lighttext">
                      <span>Source: </span>
                      <a href={link} className="text-sm underline">
                        {link}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
