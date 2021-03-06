import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Welcome to the Parks and Recreation Wordle game! Code was written by{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          @hannahcode on Github.
        </a>
      </p>
    </BaseModal>
  )
}
