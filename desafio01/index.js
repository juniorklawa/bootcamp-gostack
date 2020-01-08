const express = require('express')
const projects = []

const server = express()
server.use(express.json());
let counter = 0;

function checkProjectExists(req, res, next) {
  const { id } = req.params
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

function requestCounter(req, res, next) {
  console.count("Número de requisições");
  return next()
}

server.use(requestCounter);

server.get('/projects', (req, res) => {
  counter++;
  return res.json(projects)
})

server.post('/projects', (req, res) => {
  counter++;
  const { title, id } = req.body

  const project = {
    id,
    title,
    tasks: []
  }

  projects.push(project)

  return res.json(project)
})

server.put('/projects/:id', checkProjectExists, (req, res) => {
  counter++;
  const { id } = req.params
  const { title } = req.body;
  const project = projects.find(project => project.id === id)
  console.log('project', project)
  project.title = title

  return res.json(project)
})

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  counter++;
  const { id } = req.params
  const projectIndex = projects.findIndex(project => project.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
})

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  counter++;
  const { id } = req.params
  const { title } = req.body
  const project = projects.find(project => project.id === id)
  project.tasks.push(title)
  return res.json(project);
})

server.listen(3000);