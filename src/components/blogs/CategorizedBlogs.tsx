"use client";
import React, { useEffect, useState } from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { useSearchParams } from 'next/navigation'
import { fetchCategories } from '@/lib/actions/blogs.actions'
import { CheckedState } from '@radix-ui/react-checkbox';

interface Category {
  slug: string;
  title: string;
  description: string;
  _id: string;
}

const CategorizedBlogs = ({locale}: {locale: string}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const searchParams = useSearchParams()

  // Fetch categories
  useEffect(() => {
    const getData = async () => {
      const fetchedCategories = await fetchCategories()
      setCategories(fetchedCategories)
    }
    getData()
  }, [])

  // Handle category change (add or remove from URL search params)
  const handleCategoryChange = (slug: string, checked: CheckedState) => {
    const currentParams = new URLSearchParams(searchParams.toString())

    if (checked) {
      // If a category is checked, remove all other categories and add the selected one
      currentParams.delete('category') // Remove all existing categories
      currentParams.append('category', slug) // Add the checked category
    } else {
      // If a category is unchecked, just remove it from the search params
      currentParams.delete('category')
    }

    // Update the URL with the new parameters without reloading the page
    window.history.pushState({}, '', `?${currentParams.toString()}`)
  }

  return (
    <section className="hidden md:flex flex-col gap-5 font-helvetica">
      <h4 className="text-xl lg:text-2xl font-normal text-primary">
        Blog Categories
      </h4>
      <div className="flex flex-col gap-3">
        {categories.map((item) => (
          <div key={item._id} className="flex flex-row items-start space-x-3 space-y-0">
            <Checkbox
              checked={searchParams.has("category") && searchParams.getAll("category").includes(item.slug)} // Check if the category is selected in search params
              onCheckedChange={(checked) => handleCategoryChange(item.slug, checked!)} // Handle the category change
            />
            <Label className="text-sm font-normal">{item.title}</Label>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorizedBlogs
