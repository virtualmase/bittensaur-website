// Project Portfolio Dashboard JavaScript

// Global variables
let projects = [];
let filteredProjects = [];
let currentViewMode = 'grid';
let sortOrder = 'desc';
let editingProjectId = null;

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    renderProjects();
    updateStats();
    
    // Add sample data if no projects exist
    if (projects.length === 0) {
        addSampleProjects();
    }
});

// Project data structure
class Project {
    constructor(name, platform, status, priority, description = '', url = '', repo = '', notes = '') {
        this.id = Date.now() + Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.platform = platform;
        this.status = status;
        this.priority = priority;
        this.description = description;
        this.url = url;
        this.repo = repo;
        this.notes = notes;
        this.createdAt = new Date().toISOString();
        this.lastUpdated = new Date().toISOString();
    }
}

// Local Storage Functions
function saveProjectsToStorage() {
    localStorage.setItem('projectPortfolio', JSON.stringify(projects));
}

function loadProjectsFromStorage() {
    const stored = localStorage.getItem('projectPortfolio');
    return stored ? JSON.parse(stored) : [];
}

function loadProjects() {
    projects = loadProjectsFromStorage();
}

// Sample Projects for demonstration
function addSampleProjects() {
    const sampleProjects = [
        new Project(
            'Bittensaur Website',
            'vercel',
            'active',
            'high',
            'Main portfolio website showcasing the Bittensaur_Rex character and project information.',
            'https://bittensaur.vercel.app',
            'https://github.com/username/bittensaur-website',
            'Needs SEO optimization and performance improvements'
        ),
        new Project(
            'AI Chat Interface',
            'v0',
            'development',
            'high',
            'Next.js application with AI chat functionality using v0.dev components.',
            'https://ai-chat-v0.vercel.app',
            'https://github.com/username/ai-chat-v0',
            'Implement user authentication and chat history'
        ),
        new Project(
            'Portfolio Dashboard',
            'netlify',
            'active',
            'medium',
            'Personal portfolio dashboard built with vanilla JavaScript and modern CSS.',
            'https://portfolio-dashboard.netlify.app',
            'https://github.com/username/portfolio-dashboard',
            'Add dark mode and more customization options'
        ),
        new Project(
            'E-commerce Platform',
            'vercel',
            'maintenance',
            'medium',
            'Full-stack e-commerce solution with Next.js, Stripe, and MongoDB.',
            'https://ecommerce-platform.vercel.app',
            'https://github.com/username/ecommerce-platform',
            'Update dependencies and fix payment processing issues'
        ),
        new Project(
            'Task Management App',
            'v0',
            'development',
            'low',
            'Simple task management application with drag-and-drop functionality.',
            'https://task-manager-v0.vercel.app',
            'https://github.com/username/task-manager',
            'Add team collaboration features'
        ),
        new Project(
            'Blog Platform',
            'netlify',
            'archived',
            'low',
            'Static blog generator with markdown support and Netlify CMS.',
            'https://blog-platform.netlify.app',
            'https://github.com/username/blog-platform',
            'Consider migrating to newer static site generator'
        )
    ];
    
    projects = sampleProjects;
    saveProjectsToStorage();
    renderProjects();
    updateStats();
}

// Project Management Functions
function addNewProject() {
    editingProjectId = null;
    document.getElementById('modal-title').textContent = 'Add New Project';
    document.getElementById('project-form').reset();
    openModal();
}

function editProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    editingProjectId = projectId;
    document.getElementById('modal-title').textContent = 'Edit Project';
    
    // Populate form fields
    document.getElementById('project-name').value = project.name;
    document.getElementById('project-platform').value = project.platform;
    document.getElementById('project-url').value = project.url;
    document.getElementById('project-repo').value = project.repo;
    document.getElementById('project-status').value = project.status;
    document.getElementById('project-priority').value = project.priority;
    document.getElementById('project-description').value = project.description;
    document.getElementById('project-notes').value = project.notes;
    
    openModal();
}

function saveProject(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('project-name').value,
        platform: document.getElementById('project-platform').value,
        url: document.getElementById('project-url').value,
        repo: document.getElementById('project-repo').value,
        status: document.getElementById('project-status').value,
        priority: document.getElementById('project-priority').value,
        description: document.getElementById('project-description').value,
        notes: document.getElementById('project-notes').value
    };
    
    if (editingProjectId) {
        // Update existing project
        const projectIndex = projects.findIndex(p => p.id === editingProjectId);
        if (projectIndex !== -1) {
            projects[projectIndex] = {
                ...projects[projectIndex],
                ...formData,
                lastUpdated: new Date().toISOString()
            };
        }
    } else {
        // Create new project
        const newProject = new Project(
            formData.name,
            formData.platform,
            formData.status,
            formData.priority,
            formData.description,
            formData.url,
            formData.repo,
            formData.notes
        );
        projects.push(newProject);
    }
    
    saveProjectsToStorage();
    closeModal();
    filterProjects();
    updateStats();
}

function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
        projects = projects.filter(p => p.id !== projectId);
        saveProjectsToStorage();
        filterProjects();
        updateStats();
    }
}

// Modal Functions
function openModal() {
    document.getElementById('project-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    editingProjectId = null;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Filtering and Sorting Functions
function filterProjects() {
    const platformFilter = document.getElementById('platform-filter').value;
    const statusFilter = document.getElementById('status-filter').value;
    const priorityFilter = document.getElementById('priority-filter').value;
    const searchFilter = document.getElementById('search-filter').value.toLowerCase();
    
    filteredProjects = projects.filter(project => {
        const matchesPlatform = !platformFilter || project.platform === platformFilter;
        const matchesStatus = !statusFilter || project.status === statusFilter;
        const matchesPriority = !priorityFilter || project.priority === priorityFilter;
        const matchesSearch = !searchFilter || 
            project.name.toLowerCase().includes(searchFilter) ||
            project.description.toLowerCase().includes(searchFilter) ||
            project.notes.toLowerCase().includes(searchFilter);
        
        return matchesPlatform && matchesStatus && matchesPriority && matchesSearch;
    });
    
    sortProjects();
    renderProjects();
}

function sortProjects() {
    const sortBy = document.getElementById('sort-by').value;
    
    filteredProjects.sort((a, b) => {
        let comparison = 0;
        
        switch (sortBy) {
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'priority':
                const priorityOrder = { high: 3, medium: 2, low: 1 };
                comparison = priorityOrder[b.priority] - priorityOrder[a.priority];
                break;
            case 'status':
                comparison = a.status.localeCompare(b.status);
                break;
            case 'platform':
                comparison = a.platform.localeCompare(b.platform);
                break;
            case 'lastUpdated':
            default:
                comparison = new Date(b.lastUpdated) - new Date(a.lastUpdated);
                break;
        }
        
        return sortOrder === 'desc' ? comparison : -comparison;
    });
}

function toggleSortOrder() {
    sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    const btn = document.getElementById('sort-order-btn');
    btn.innerHTML = sortOrder === 'desc' ? 
        '<i class="fas fa-sort-amount-down"></i>' : 
        '<i class="fas fa-sort-amount-up"></i>';
    sortProjects();
    renderProjects();
}

// View Mode Functions
function setViewMode(mode) {
    currentViewMode = mode;
    const container = document.getElementById('projects-container');
    const gridBtn = document.getElementById('grid-view-btn');
    const listBtn = document.getElementById('list-view-btn');
    
    if (mode === 'list') {
        container.classList.add('list-view');
        gridBtn.classList.remove('active');
        listBtn.classList.add('active');
    } else {
        container.classList.remove('list-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    }
    
    renderProjects();
}

// Rendering Functions
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>No projects found</h3>
                <p>Try adjusting your filters or add a new project to get started.</p>
                <button class="btn btn-primary" onclick="addNewProject()">
                    <i class="fas fa-plus"></i> Add Your First Project
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredProjects.map(project => {
        const platformIcon = getPlatformIcon(project.platform);
        const statusClass = `project-status ${project.status}`;
        const priorityClass = `project-priority ${project.priority}`;
        const listViewClass = currentViewMode === 'list' ? 'list-view' : '';
        
        return `
            <div class="project-card ${listViewClass}" data-id="${project.id}">
                <div class="project-header">
                    <div>
                        <h3 class="project-title">${project.name}</h3>
                        <span class="project-platform ${project.platform}">
                            ${platformIcon} ${project.platform.toUpperCase()}
                        </span>
                    </div>
                    <div class="project-meta">
                        <span class="${statusClass}">${project.status}</span>
                        <span class="${priorityClass}">${project.priority}</span>
                    </div>
                </div>
                
                ${currentViewMode === 'grid' ? `
                    <p class="project-description">${project.description || 'No description provided.'}</p>
                    
                    ${(project.url || project.repo) ? `
                        <div class="project-links">
                            ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i> Live Site
                            </a>` : ''}
                            ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i> Repository
                            </a>` : ''}
                        </div>
                    ` : ''}
                    
                    ${project.notes ? `<div class="project-notes">${project.notes}</div>` : ''}
                    
                    <div class="project-actions">
                        <button onclick="editProject('${project.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button onclick="deleteProject('${project.id}')" class="delete">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                ` : `
                    <div class="project-description">${project.description || 'No description provided.'}</div>
                    <div class="project-actions">
                        <button onclick="editProject('${project.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button onclick="deleteProject('${project.id}')" class="delete">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                `}
            </div>
        `;
    }).join('');
}

function getPlatformIcon(platform) {
    const icons = {
        vercel: '<i class="fas fa-rocket"></i>',
        v0: '<i class="fas fa-cube"></i>',
        netlify: '<i class="fas fa-cloud"></i>'
    };
    return icons[platform] || '<i class="fas fa-globe"></i>';
}

function updateStats() {
    const vercelCount = projects.filter(p => p.platform === 'vercel').length;
    const v0Count = projects.filter(p => p.platform === 'v0').length;
    const netlifyCount = projects.filter(p => p.platform === 'netlify').length;
    const totalCount = projects.length;
    
    document.getElementById('vercel-count').textContent = vercelCount;
    document.getElementById('v0-count').textContent = v0Count;
    document.getElementById('netlify-count').textContent = netlifyCount;
    document.getElementById('total-count').textContent = totalCount;
}

// Export Functions
function exportData() {
    const data = {
        projects: projects,
        exportDate: new Date().toISOString(),
        totalProjects: projects.length,
        platformBreakdown: {
            vercel: projects.filter(p => p.platform === 'vercel').length,
            v0: projects.filter(p => p.platform === 'v0').length,
            netlify: projects.filter(p => p.platform === 'netlify').length
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `project-portfolio-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + N to add new project
    if ((event.ctrlKey || event.metaKey) && event.key === 'n') {
        event.preventDefault();
        addNewProject();
    }
    
    // Escape to close modal
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Auto-save functionality
let autoSaveTimeout;
function scheduleAutoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        saveProjectsToStorage();
    }, 1000);
}

// Add auto-save to form inputs
document.addEventListener('input', function(event) {
    if (event.target.closest('#project-form')) {
        scheduleAutoSave();
    }
});

// Initialize with sample data if needed
if (projects.length === 0) {
    addSampleProjects();
}