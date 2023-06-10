'use-client'
import { Flex, Text, Spacer, Button, Box } from '@chakra-ui/react'

import React from 'react'
import Link from 'next/link';
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";


const Navbar = (): React.JSX.Element => {
  const session = useSession();
  const supabase = useSupabaseClient()
  return (
    <>
      <Box
        padding="10px 40px"
        width="100%"
        borderBottom=".1px solid #ececec"
        mb="40px"
      >
        <Flex alignItems="center">
          <Link href="/home">
            <Text fontSize="36" fontWeight="medium" variant="h3">
              Chatter
            </Text>
          </Link>

          <Spacer />
          <Flex fontSize="18px" gap="4">
            <Link href="#about">About</Link>
            <Link href="#contact-us">Contact Us</Link>
            <Link href="#blogs">Blogs</Link>
          </Flex>
          <Spacer />
          {!session ? (
            <Flex gap="8">
              <Link href="/auth">
                <Button
                  borderColor="blue.700"
                  textColor="blue.700"
                  colorScheme="white"
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth">
                <Button textColor="white" bg="purple.500">
                  Signup
                </Button>
              </Link>
            </Flex>
          ) : (
            <Box>
              <button
                className="button block"
                type="submit"
                onClick={() => supabase.auth.signOut()}
              >
                Sign out
              </button>
            </Box>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar