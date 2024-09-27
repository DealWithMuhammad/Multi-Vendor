'use client';

import { MessageSquare, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Dashboard() {
  const tasks = [
    {
      name: 'Client Onboarding - Circle',
      admin: 'Samanta J.',
      members: 3,
      status: 'In progress',
      runTime: '6 hours',
      finishDate: '6 Mon',
    },
    {
      name: 'Meeting with Webflow & Notion',
      admin: 'Bob P.',
      members: 4,
      status: 'Done',
      runTime: '2 hours',
      finishDate: '7 Tue',
    },
    {
      name: 'First Handoff with Engineers',
      admin: 'Kate O.',
      members: 10,
      status: 'In progress',
      runTime: '3 days',
      finishDate: '10 Fri',
    },
    {
      name: 'Client Drafting (2) with Lawrence',
      admin: 'Jack F.',
      members: 7,
      status: 'In progress',
      runTime: '1 week',
      finishDate: '19 Sun',
    },
  ];

  const projects = [
    {
      name: 'Improve cards readability',
      date: '21.03.22',
      tags: ['Feedback', 'Bug', 'Design System'],
      comments: 12,
      files: 0,
    },
    {
      name: 'Add new features to dashboard',
      date: '22.03.22',
      tags: ['Feature', 'UI/UX'],
      comments: 8,
      files: 2,
    },
    {
      name: 'Refactor authentication system',
      date: '23.03.22',
      tags: ['Backend', 'Security'],
      comments: 5,
      files: 1,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Last tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-xs font-semibold tracking-wide text-gray-500 uppercase border-b">
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3">Admin</th>
                          <th className="px-4 py-3">Members</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Run time</th>
                          <th className="px-4 py-3">Finish date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y">
                        {tasks.map((task, index) => (
                          <tr key={index} className="text-gray-700">
                            <td className="px-4 py-3">{task.name}</td>
                            <td className="px-4 py-3">{task.admin}</td>
                            <td className="px-4 py-3">{task.members}</td>
                            <td className="px-4 py-3">
                              <Badge
                                variant={
                                  task.status === 'Done'
                                    ? 'default'
                                    : 'secondary'
                                }
                              >
                                {task.status}
                              </Badge>
                            </td>
                            <td className="px-4 py-3">{task.runTime}</td>
                            <td className="px-4 py-3">{task.finishDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Productivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
                    Productivity Chart Placeholder
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Projects in progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow"
                      >
                        <h3 className="font-semibold mb-2">{project.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {project.date}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MessageSquare className="h-4 w-4 mr-1" />{' '}
                          {project.comments} comments
                          <span className="mx-2">•</span>
                          <Search className="h-4 w-4 mr-1" /> {project.files}{' '}
                          files
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
