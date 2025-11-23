"use client";

import React from "react";
import Box from "@/components/layout/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Comment as CommentIcon,
  CalendarToday as CalendarIcon,
  PlayCircleOutline as PlayIcon,
} from "@mui/icons-material";

// Mock data
const rows = [
  {
    id: 1,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "Building a SaaS with Next.js 14",
    views: "1.2M",
    comments: "3.4K",
    published: "2024",
  },
  {
    id: 2,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "React Server Components Explained",
    views: "850K",
    comments: "2.1K",
    published: "2023",
  },
  {
    id: 3,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "Mastering Tailwind CSS",
    views: "500K",
    comments: "1.8K",
    published: "2023",
  },
  {
    id: 4,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "TypeScript for Beginners",
    views: "2.5M",
    comments: "5.2K",
    published: "2022",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg",
    title: "VS Code Tips & Tricks",
    views: "300K",
    comments: "900",
    published: "2024",
  },
];

function VideoTable() {
  return (
    <Box title='Top Performing Videos'>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: "1px solid #e5e7eb", borderRadius: 2 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label='video table'>
          <TableHead sx={{ bgcolor: "#f9fafb" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, color: "#4b5563" }}>
                Video
              </TableCell>
              <TableCell
                align='right'
                sx={{ fontWeight: 600, color: "#4b5563" }}
              >
                <div className='flex items-center justify-end gap-1'>
                  <VisibilityIcon fontSize='small' className='text-gray-400' />
                  Views
                </div>
              </TableCell>
              <TableCell
                align='right'
                sx={{ fontWeight: 600, color: "#4b5563" }}
              >
                <div className='flex items-center justify-end gap-1'>
                  <CommentIcon fontSize='small' className='text-gray-400' />
                  Comments
                </div>
              </TableCell>
              <TableCell
                align='right'
                sx={{ fontWeight: 600, color: "#4b5563" }}
              >
                <div className='flex items-center justify-end gap-1'>
                  <CalendarIcon fontSize='small' className='text-gray-400' />
                  Published
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { bgcolor: "#f9fafb" },
                }}
              >
                <TableCell component='th' scope='row'>
                  <div className='flex items-center gap-3'>
                    <div className='relative w-16 h-10 rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer'>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={row.image}
                        alt={row.title}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                        <PlayIcon className='text-white' fontSize='small' />
                      </div>
                    </div>
                    <Typography
                      variant='body2'
                      fontWeight={500}
                      color='text.primary'
                    >
                      {row.title}
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align='right'>
                  <Typography
                    variant='body2'
                    fontWeight={600}
                    color='text.secondary'
                  >
                    {row.views}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='body2' color='text.secondary'>
                    {row.comments}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Chip
                    label={row.published}
                    size='small'
                    variant='outlined'
                    sx={{
                      borderColor: "#e5e7eb",
                      color: "#6b7280",
                      fontWeight: 500,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default VideoTable;
