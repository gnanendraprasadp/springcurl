import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function App() {
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
    <>
      <Typography variant="h3" style={{ textAlign: "center" }} gutterBottom>
        Spring cURL
      </Typography>
      <Typography variant="h6" style={{ textAlign: "center" }} gutterBottom>
        An easy way to generate Spring Boot project using cURL Command
      </Typography>
      <br />
      <FormControl>
        <FormLabel
          id="output-format-radio-button-group"
          focused={true}
          color="success"
        >
          Output Format
        </FormLabel>
        <RadioGroup
          row
          name="output-format"
          aria-labelledby="output-format-radio-button-group"
          value={format}
          onChange={(event) => setFormat(event.target.value)}
        >
          <FormControlLabel
            value="zip"
            control={<Radio color="success" />}
            label="Zip"
          />
          <FormControlLabel
            value="tgz"
            control={<Radio color="success" />}
            label="Tgz"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel
          id="project-radio-button-group"
          focused={true}
          color="success"
        >
          Project
        </FormLabel>
        <RadioGroup
          row
          name="project"
          aria-labelledby="project-radio-button-group"
          value={project}
          onChange={(event) => setProject(event.target.value)}
        >
          <FormControlLabel
            value="gradle-project *"
            control={<Radio color="success" />}
            label="Gradle - Groovy"
          />
          <FormControlLabel
            value="gradle-project-kotlin"
            control={<Radio color="success" />}
            label="Gradle - Kotlin"
          />
          <FormControlLabel
            value="maven-project"
            control={<Radio color="success" />}
            label="Maven"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel
          id="language-radio-button-group"
          focused={true}
          color="success"
        >
          Language
        </FormLabel>
        <RadioGroup
          row
          name="language"
          aria-labelledby="language-radio-button-group"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <FormControlLabel
            value="java"
            control={<Radio color="success" />}
            label="Java"
          />
          <FormControlLabel
            value="kotlin"
            control={<Radio color="success" />}
            label="Kotlin"
          />
          <FormControlLabel
            value="groovy"
            control={<Radio color="success" />}
            label="Groovy"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel
          id="packaging-radio-button-group"
          focused={true}
          color="success"
        >
          Packaging
        </FormLabel>
        <RadioGroup
          row
          name="packaging"
          aria-labelledby="packaging-radio-button-group"
          value={packaging}
          onChange={(event) => setPackaging(event.target.value)}
        >
          <FormControlLabel
            value="jar"
            control={<Radio color="success" />}
            label="Jar"
          />
          <FormControlLabel
            value="war"
            control={<Radio color="success" />}
            label="War"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel
          id="springboot-radio-button-group"
          focused={true}
          color="success"
        >
          Springboot
        </FormLabel>
        <RadioGroup
          row
          name="springboot"
          aria-labelledby="springboot-radio-button-group"
          value={springboot}
          onChange={(event) => setSpringboot(event.target.value)}
        >
          <FormControlLabel
            value="3.0.2 (SNAPSHOT)"
            control={<Radio color="success" />}
            label="3.0.2 (SNAPSHOT)"
          />
          <FormControlLabel
            value="3.0.1"
            control={<Radio color="success" />}
            label="3.0.1"
          />
          <FormControlLabel
            value="2.7.8 (SNAPSHOT)"
            control={<Radio color="success" />}
            label="2.7.8 (SNAPSHOT)"
          />
          <FormControlLabel
            value="2.7.7"
            control={<Radio color="success" />}
            label="2.7.7"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel id="java-radio-button-group" focused={true} color="success">
          Java
        </FormLabel>
        <RadioGroup
          row
          name="java"
          aria-labelledby="java-radio-button-group"
          value={java}
          onChange={(event) => setJava(event.target.value)}
        >
          <FormControlLabel
            value="19"
            control={<Radio color="success" />}
            label="19"
          />
          <FormControlLabel
            value="17"
            control={<Radio color="success" />}
            label="17"
          />
          <FormControlLabel
            value="11"
            control={<Radio color="success" />}
            label="11"
          />
          <FormControlLabel
            value="8"
            control={<Radio color="success" />}
            label="8"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <TextField
        color="success"
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Group Id"
        variant="outlined"
        value={group}
        onChange={(event) => setGroup(event.target.value)}
      />
      <br />
      <br />
      <TextField
        color="success"
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Artifact"
        variant="outlined"
        value={artifact}
        onChange={(event) => setArtifact(event.target.value)}
      />
      <br />
      <br />
      <TextField
        color="success"
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />{" "}
      <br />
      <br />
      <TextField
        color="success"
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <br />
      <TextField
        color="success"
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Package name"
        variant="outlined"
        value={packageName}
        onChange={(event) => setpackageName(event.target.value)}
      />
      <br />
      <br />
      <TextField
        color="success"
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Application Name"
        variant="outlined"
        value={applicationName}
        onChange={(event) => setApplicationName(event.target.value)}
      />
      <br />
      <br />
      <TextField
        color="success"
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Application Version"
        variant="outlined"
        value={applicationVersion}
        onChange={(event) => setApplicationVersion(event.target.value)}
      />
      <br />
      <br />
      <Typography variant="h6" style={{ fontWeight: "bold" }} gutterBottom>
        Your cURL Command is
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        curl -G{" "}
        {format === "zip"
          ? "https://start.spring.io/starter.zip"
          : "https://start.spring.io/starter.tgz"}{" "}
        -d type={project} -d language={language} -d packaging={packaging} -d
        bootVersion={springboot} -d javaVersion={java} -d applicationName=
        {applicationName} -d artifactId={artifact} -d dependencies=web,data-jpa{" "}
        -d description={encodeURIComponent(description.trim())} -d groupId=
        {group} -d name={name} -d packageName={packageName} -d version=
        {applicationVersion}{" "}
        {format === "zip"
          ? "-o " + artifact + ".zip"
          : "-d baseDir=" + artifact + " | tar -xzvf -"}
      </Typography>
      <Typography
        variant="body1"
        style={{ textAlign: "center", fontWeight: "bold" }}
        gutterBottom
      >
        Developed by Gnaad
      </Typography>
    </>
  );
}

export default App;
