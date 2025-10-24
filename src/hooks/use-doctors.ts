"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDoctors, createDoctor, updateDoctor } from "../lib/actions/doctors";

export function useGetDoctors() {
    const result = useQuery({
        queryKey: ["doctors"],
        queryFn: () => getDoctors()
    })
    return result
}


export function useCreateDoctor() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: createDoctor,
    onSuccess: () => {
      // invalidate related queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Error while  creating a doctor"),
  });

  return result;
}

export function useUpdateDoctor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
      queryClient.invalidateQueries({ queryKey: ["getAvailableDoctors"] });
    },
    onError: (error) => console.error("Failed to update doctor:", error),
  });
}