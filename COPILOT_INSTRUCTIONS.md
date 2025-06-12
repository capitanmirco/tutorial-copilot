# Copilot Instructions

## Project Overview
This project is designed as a playground to demonstrate how to use GitHub Copilot as a programming assistant. It serves as an educational tool to illustrate various ways Copilot can help with code development, problem-solving, and programming tasks.

## Project Purpose
- Provide practical examples of Copilot usage in a real development environment
- Demonstrate how Copilot can assist with coding tasks, bug fixing, and feature implementation
- Serve as a learning resource for developers who want to leverage Copilot in their workflow

## Technologies Used
This project is built using the following technologies (based on package.json):

### Core Technologies
- **Angular**: Version 20.0.0 - Modern web application framework
- **TypeScript**: Version 5.8.2 - Strongly typed programming language that builds on JavaScript
- **Express.js**: Version 5.1.0 - Web application framework for server-side rendering

### Angular Specific Libraries
- Angular Common, Compiler, Core, Forms, Router
- Angular Platform Browser & Server
- Angular SSR (Server-Side Rendering) capabilities

### Development Tools
- Angular CLI: Version 20.0.1 - Command line interface for Angular
- Jasmine & Karma: Testing frameworks for Angular applications
- RxJS: Reactive programming library using Observables

## How to Use This Project
This playground can be used to:
1. Explore different ways to prompt Copilot for assistance
2. Test Copilot's capabilities with Angular and TypeScript code
3. Learn effective strategies for working with Copilot as a programming partner

## Project Structure
The project follows a modular architecture with the following structure:

```
src/
├── app/
│   ├── core/              # Singleton services, guards, interceptors, models
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   └── services/
│   ├── features/          # Feature modules organized by functionality
│   │   ├── about/
│   │   ├── examples/
│   │   └── home/
│   ├── layouts/           # Application layout components
│   └── shared/            # Reusable components, directives, pipes
│       ├── components/
│       ├── directives/
│       └── pipes/
├── assets/                # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
└── environments/          # Environment configuration
```

### Module Organization

- **Core Module**: Contains singleton services and application-wide providers
- **Shared Module**: Contains reusable components, directives, and pipes
- **Feature Modules**: Contains components specific to application features
- **Layouts**: Contains layout components (header, footer, etc.)

## Getting Started
- Run `npm install` to install all dependencies
- Run `npm start` to start the development server
- The application will be available at http://localhost:4200/

## Testing
- Run `npm test` to execute the test suite with Karma

## Building for Production
- Run `npm run build` to build the project for production
- Server-side rendering can be enabled with `npm run serve:ssr:tutorial-copilot-app`