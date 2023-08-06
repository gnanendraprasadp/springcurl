import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Dependencies from "../fields/Dependencies";
import Java from "./../fields/Java";
import Language from "./../fields/Language";
import OutputType from "./../fields/OutputType";
import Packaging from "./../fields/Packaging";
import Project from "./../fields/Project";
import SpringBoot from "./../fields/SpringBoot";
import TextInput from "./../fields/TextInput";
import client from "../asset/client.json";

function Main() {
  const [format, setFormat] = useState(client.outputType.default);
  const [project, setProject] = useState(client.projectType.default);
  const [language, setLanguage] = useState(client.language.default);
  const [springboot, setSpringboot] = useState(client.bootVersion.default);
  const [packaging, setPackaging] = useState(client.packaging.default);
  const [java, setJava] = useState(client.javaVersion.default);
  const [group, setGroup] = useState("com.example");
  const [artifact, setArtifact] = useState("demo");
  const [name, setName] = useState("demo");
  const [description, setDescription] = useState("Spring Boot by cURL");
  const [packageName, setPackageName] = useState("com.example.demo");
  const [dependency, setDependency] = useState("");

  const first = "curl -G";
  let format_curl = ` ${
    format === "zip"
      ? "https://start.spring.io/starter.zip"
      : "https://start.spring.io/starter.tgz"
  }`;
  let type_curl = ` -d type=${project}`;
  let language_curl = ` -d language=${language}`;
  let packaging_curl = ` -d packaging=${packaging}`;
  let bootVersion_curl = ` -d bootVersion=${springboot}`;
  let java_curl = ` -d javaVersion=${java}`;
  let artifact_curl = ` -d artifactId=${artifact}`;
  let dependency_curl = ` -d dependencies=${dependency}`;
  let description_curl = ` -d description=${encodeURIComponent(
    description.trim()
  )}`;
  let groupId_curl = ` -d groupId=${group}`;
  let name_curl = ` -d name=${name}`;
  let packageName_curl = ` -d packageName=${packageName}`;
  let output_curl = `${
    format === "zip"
      ? " -o " + artifact + ".zip"
      : " -d baseDir=" + artifact + " | tar -xzvf -"
  }`;

  let curlCommand =
    first +
    format_curl +
    type_curl +
    language_curl +
    packaging_curl +
    bootVersion_curl +
    java_curl +
    artifact_curl +
    dependency_curl +
    description_curl +
    groupId_curl +
    name_curl +
    packageName_curl +
    output_curl;

  return (
    <>
      <Box sx={{ p: 5 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} lg={6}>
            <OutputType format={format} setFormat={setFormat} />
            <Project project={project} setProject={setProject} />
            <Language language={language} setLanguage={setLanguage} />
            <Packaging packaging={packaging} setPackaging={setPackaging} />
            <SpringBoot springboot={springboot} setSpringboot={setSpringboot} />
            <Java java={java} setJava={setJava} />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <TextInput
              label="Group Id"
              value={group}
              onChange={(event) => setGroup(event.target.value)}
            />

            <TextInput
              label="Artifact"
              value={artifact}
              onChange={(event) => setArtifact(event.target.value)}
            />

            <TextInput
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <TextInput
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

            <TextInput
              label="Package name"
              value={packageName}
              onChange={(event) => setPackageName(event.target.value)}
            />

            <Dependencies
              label="Dependencies"
              dependency={dependency}
              setDependency={setDependency}
            />
          </Grid>

          <Grid xs={12} md={12} lg={12}>
            <Typography variant="p" style={{ fontWeight: "bold" }} gutterBottom>
              Your cURL Command is
            </Typography>

            <CopyBlock
              text={curlCommand}
              language="shell"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
              codeBlock={false}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Main;
