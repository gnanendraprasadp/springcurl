import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Java from "./radiogroup/Java";
import Language from "./radiogroup/Language";
import OutputType from "./radiogroup/OutputType";
import Packaging from "./radiogroup/Packaging";
import Project from "./radiogroup/Project";
import SpringBoot from "./radiogroup/SpringBoot";
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
  const [description, setDescription] = useState("Spring Boot by cURL");
  const [packageName, setpackageName] = useState("com.example.demo");

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
              onChange={(event) => setpackageName(event.target.value)}
            />
          </Grid>

          <Grid xs={12} md={12} lg={12}>
            <Typography variant="p" style={{ fontWeight: "bold" }} gutterBottom>
              Your cURL Command is
            </Typography>
            <br />

            <Card
              sx={{ minWidth: 275 }}
              style={{
                color: "#fff",
                background: "#000",
                marginTop: "0.75%",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1">
                  curl -G{" "}
                  {format === "zip"
                    ? "https://start.spring.io/starter.zip"
                    : "https://start.spring.io/starter.tgz"}{" "}
                  -d type={project} -d language={language} -d packaging=
                  {packaging} -d bootVersion={springboot} -d javaVersion={java}{" "}
                  -d artifactId={artifact} -d dependencies=web,data-jpa -d
                  description=
                  {encodeURIComponent(description.trim())} -d groupId=
                  {group} -d name={name} -d packageName={packageName}{" "}
                  {format === "zip"
                    ? "-o " + artifact + ".zip"
                    : "-d baseDir=" + artifact + " | tar -xzvf -"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Main;
