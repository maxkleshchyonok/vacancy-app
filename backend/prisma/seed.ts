import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const vacancies = [
    {
      title: 'Middle full-stack dev',
      description:
        'As a Middle Full-Stack Developer, you will be responsible for developing and maintaining web applications and software solutions that meet the needs of our company and clients. You will work closely with the development team to design, develop, and implement scalable and robust solutions that adhere to industry best practices.',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true',
    },
    {
      title: 'Senior .Net developer',
      description:
        'As a Senior .NET Developer, you will play a critical role in designing, developing, and maintaining high-quality software solutions using the .NET framework. You will be responsible for leading development projects, mentoring junior developers, and collaborating with cross-functional teams to deliver robust and scalable applications.',
      logo: 'https://cdn.logojoy.com/wp-content/uploads/20230921104408/Facebook-logo-600x319.png',
    },
    {
      title: 'UI/UX Designer',
      description:
        'As a UI/UX Designer, you will be responsible for creating visually appealing and user-friendly interfaces for web and mobile applications. You will collaborate closely with cross-functional teams, including product managers, developers, and stakeholders, to understand user needs and translate them into intuitive and engaging designs. Your role will be crucial in shaping the user experience and ensuring that the final product meets both aesthetic and functional requirements.',
      logo: 'https://e7.pngegg.com/pngimages/207/844/png-clipart-logo-epam-systems-computer-software-organization-logo-github-text-logo-thumbnail.png',
    },
    {
      title: 'Middle Go developer',
      description:
        'As a Middle Go Developer, you will be responsible for designing, developing, and maintaining highly scalable and efficient software solutions using the Go programming language. You will work closely with the development team to build robust back-end systems, APIs, and microservices that power our applications. Your expertise in Go programming will be crucial in delivering high-quality code and optimizing performance.',
      logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png',
    },
    {
      title: 'Junior Python developer',
      description:
        'As a Junior Python Developer, you will be part of our development team, assisting in the design, development, and maintenance of software applications using the Python programming language. You will work closely with experienced developers and gain hands-on experience in building robust and scalable solutions. This is a great opportunity to grow your skills and contribute to real-world projects while being mentored by senior team members.',
      logo: 'https://huisstijlblog.nl/wp-content/uploads/2016/03/Amazon-logo-1024x768.png',
    },
  ];

  for (const vacancy of vacancies) {
    try {
      await prisma.vacancy.create({ data: vacancy });
    } catch (error) {
      console.error(`Error creating vacancy: ${error}`);
    }
  }

  await prisma.$disconnect();
}

seed()
  .catch((error) => {
    console.error(`Error seeding database: ${error}`);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect;
  });
