import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Java from "./radiogroup/Java";
import Language from "./radiogroup/Language";
import OutputType from "./radiogroup/OutputType";
import Packaging from "./radiogroup/Packaging";
import Project from "./radiogroup/Project";
import SpringBoot from "./radiogroup/SpringBoot";
import Dropdown from "./select/Dropdown";
import TextInput from "./textfield/TextInput";

function Main() {
  const [format, setFormat] = useState("zip");
  const [project, setProject] = useState("gradle-project *");
  const [language, setLanguage] = useState("java");
  const [springboot, setSpringboot] = useState("3.0.1");
  const [packaging, setPackaging] = useState("jar");
  const [java, setJava] = useState("17");
  const [group, setGroup] = useState("com.example");
  const [artifact, setArtifact] = useState("demo");
  const [name, setName] = useState("demo");
  const [description, setDescription] = useState(
    "Demo project for Spring Boot"
  );
  const [packageName, setpackageName] = useState("com.example.demo");
  const [applicationName, setApplicationName] = useState("DemoApplication");
  const [applicationVersion, setApplicationVersion] =
    useState("0.0.1-SNAPSHOT");

  return (
    <div className="main-padding">
      <OutputType format={format} setFormat={setFormat} />
      <br />
      <Project project={project} setProject={setProject} />
      <br />
      <Language language={language} setLanguage={setLanguage} />
      <br />
      <Packaging packaging={packaging} setPackaging={setPackaging} />
      <br />
      <SpringBoot springboot={springboot} setSpringboot={setSpringboot} />
      <br />
      <Java java={java} setJava={setJava} />
      <br />
      <br />

      <TextInput
        label="Group Id"
        value={group}
        onChange={(event) => setGroup(event.target.value)}
      />

      <br />
      <br />

      <TextInput
        label="Artifact"
        value={artifact}
        onChange={(event) => setArtifact(event.target.value)}
      />

      <br />
      <br />

      <TextInput
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <br />
      <br />

      <TextInput
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <br />
      <br />

      <TextInput
        label="Package name"
        value={packageName}
        onChange={(event) => setpackageName(event.target.value)}
      />

      <br />
      <br />

      <TextInput
        label="Application Name"
        value={applicationName}
        onChange={(event) => setApplicationName(event.target.value)}
      />

      <br />
      <br />

      <TextInput
        label="Application Version"
        value={applicationVersion}
        onChange={(event) => setApplicationVersion(event.target.value)}
      />

      <br />
      <br />
      <Dropdown />
      <br />
      <br />
      <Typography variant="h6" style={{ fontWeight: "bold" }} gutterBottom>
        Your cURL Command is
      </Typography>
      <Card
        sx={{ minWidth: 275 }}
        style={{
          marginLeft: "4%",
          marginRight: "4%",
          paddingTop: "0%",
          paddingBottom: "0%",
          color: "#fff",
          background: "#000",
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            curl -G{" "}
            {format === "zip"
              ? "https://start.spring.io/starter.zip"
              : "https://start.spring.io/starter.tgz"}{" "}
            -d type={project} -d language={language} -d packaging={packaging} -d
            bootVersion={springboot} -d javaVersion={java} -d applicationName=
            {applicationName} -d artifactId={artifact} -d
            dependencies=web,data-jpa -d description=
            {encodeURIComponent(description.trim())} -d groupId=
            {group} -d name={name} -d packageName={packageName} -d version=
            {applicationVersion}{" "}
            {format === "zip"
              ? "-o " + artifact + ".zip"
              : "-d baseDir=" + artifact + " | tar -xzvf -"}
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Typography
        variant="body1"
        style={{ textAlign: "center", fontWeight: "bold" }}
        gutterBottom
      >
        Developed by{" "}
        <a
          style={{ color: "#000000" }}
          href="https://github.com/gnanendraprasadp"
        >
          Gnaad
        </a>
      </Typography>
    </div>
  );
}

export default Main;
