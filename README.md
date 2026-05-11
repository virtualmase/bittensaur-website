# Project Portfolio Dashboard

A comprehensive dashboard to filter, rank, and manage your projects across multiple deployment platforms including Vercel, v0, and Netlify.

## Features

### 🎯 **Project Management**
- Add, edit, and delete projects
- Track project status (Active, Development, Maintenance, Archived)
- Set priority levels (High, Medium, Low)
- Add descriptions, URLs, repository links, and notes

### 🔍 **Advanced Filtering & Sorting**
- Filter by platform (Vercel, v0, Netlify)
- Filter by status and priority
- Search across project names, descriptions, and notes
- Sort by name, priority, status, platform, or last updated
- Toggle between ascending and descending order

### 📊 **Visual Dashboard**
- Real-time statistics showing project counts by platform
- Grid and list view modes
- Modern, responsive design with glassmorphism effects
- Platform-specific color coding

### 💾 **Data Persistence**
- Local storage for data persistence
- Export functionality for backup and sharing
- Auto-save functionality

### ⌨️ **Keyboard Shortcuts**
- `Ctrl/Cmd + N`: Add new project
- `Escape`: Close modal

## Getting Started

### 1. Open the Dashboard
Open `project-dashboard.html` in your web browser. The dashboard will load with sample data to demonstrate functionality.

### 2. Add Your Projects
Click the "Add Project" button or use `Ctrl/Cmd + N` to add your first project. Fill in:
- **Project Name**: Required
- **Platform**: Choose from Vercel, v0, or Netlify
- **Status**: Active, Development, Maintenance, or Archived
- **Priority**: High, Medium, or Low
- **Description**: Brief project overview
- **URLs**: Live site and repository links
- **Notes**: Additional information, tasks, or reminders

### 3. Filter and Organize
Use the filter section to:
- **Platform Filter**: Show only projects from specific platforms
- **Status Filter**: Focus on active, development, or archived projects
- **Priority Filter**: Prioritize high-priority projects
- **Search**: Find projects by name, description, or notes

### 4. Sort and View
- **Sort Options**: Sort by last updated, name, priority, status, or platform
- **View Modes**: Switch between grid view (detailed cards) and list view (compact)
- **Sort Order**: Toggle between ascending and descending

## Use Cases

### For Developers
- **Portfolio Management**: Keep track of all your deployed projects
- **Project Prioritization**: Focus on high-priority projects
- **Status Tracking**: Monitor which projects need attention
- **Quick Access**: Direct links to live sites and repositories

### For Project Managers
- **Team Overview**: Track projects across different platforms
- **Resource Allocation**: Identify high-priority projects
- **Progress Monitoring**: See which projects are active vs. archived
- **Documentation**: Keep notes and reminders for each project

### For Freelancers
- **Client Project Tracking**: Organize projects by platform and status
- **Portfolio Showcase**: Easy access to live demos and code
- **Task Management**: Use notes for client-specific tasks
- **Time Management**: Prioritize projects based on deadlines

## Platform Integration

### Vercel Projects
- Track Next.js, React, and other Vercel deployments
- Monitor deployment status and performance
- Link to Vercel dashboard and GitHub repositories

### v0 Projects
- Manage AI-generated applications
- Track v0.dev generated projects
- Monitor component usage and updates

### Netlify Projects
- Track static sites and JAMstack applications
- Monitor build status and deployment
- Link to Netlify dashboard and Git repositories

## Data Management

### Local Storage
All project data is stored locally in your browser's localStorage. This means:
- ✅ No account required
- ✅ Works offline
- ✅ Data persists between sessions
- ⚠️ Data is browser-specific (won't sync across devices)

### Export Functionality
Export your project data as JSON for:
- **Backup**: Safeguard your project data
- **Sharing**: Share project lists with team members
- **Migration**: Move data to other systems
- **Analysis**: Import into spreadsheet applications

### Sample Data
The dashboard includes sample projects to demonstrate functionality. You can:
- Edit sample projects to match your real projects
- Delete sample projects and add your own
- Use sample projects as templates

## Customization

### Adding New Platforms
To add support for additional platforms:

1. **Update HTML**: Add platform option to filter dropdown
2. **Update CSS**: Add platform-specific styling
3. **Update JavaScript**: Add platform icon and color scheme

### Styling Customization
The dashboard uses CSS custom properties and modern design patterns:
- Glassmorphism effects with backdrop-filter
- Responsive grid layouts
- Platform-specific color schemes
- Hover animations and transitions

## Browser Compatibility

- ✅ Chrome 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Edge 88+

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + N` | Add new project |
| `Escape` | Close modal |
| `Tab` | Navigate form fields |
| `Enter` | Submit forms |

## Tips for Effective Use

### 1. **Consistent Naming**
Use clear, descriptive project names that include the technology stack or purpose.

### 2. **Regular Updates**
Update project status and notes regularly to keep the dashboard current.

### 3. **Priority Management**
Use priority levels to focus on the most important projects first.

### 4. **Detailed Notes**
Use the notes field for:
- Current tasks and next steps
- Known issues or bugs
- Deployment instructions
- Client feedback or requirements

### 5. **URL Management**
Always include both live site URLs and repository links for quick access.

## Troubleshooting

### Data Not Saving
- Check if localStorage is enabled in your browser
- Try refreshing the page
- Clear browser cache if needed

### Projects Not Loading
- Check browser console for JavaScript errors
- Ensure all files are in the same directory
- Verify file permissions

### Export Issues
- Ensure popup blockers are disabled
- Check if download folder is accessible
- Try different browsers if issues persist

## Future Enhancements

Potential features for future versions:
- Cloud sync across devices
- Team collaboration features
- Integration with platform APIs
- Advanced analytics and reporting
- Custom fields and tags
- Project templates
- Import from platform APIs

## Contributing

This is a standalone project, but suggestions for improvements are welcome:
- Bug reports
- Feature requests
- UI/UX improvements
- Performance optimizations

## License

This project is open source and available under the MIT License.

---

**Happy Project Management! 🚀**