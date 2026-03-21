// import { createClient } from '@/lib/supabase/server';

// import { ProjectCard } from '@/components/projects/card';

export const ProjectsCards = async ({ limit = 24 }: { limit?: number }) => {
  console.error('limit', limit);
  // const supabase = await createClient();
  const projects = [{ id: 1 }];

  // const { data: projects } = await supabase
  //   .from('projects')
  //   .select('*')
  //   .order('created_at', { ascending: false })
  //   .limit(limit);

  return (
    <>
      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))} */}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>No projects available yet. Check back soon!</p>
        </div>
      )}
    </>
  );
};

export default ProjectsCards;
